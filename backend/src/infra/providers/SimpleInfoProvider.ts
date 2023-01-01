import axios from 'axios';

import { IDocumentValidatorProvider } from '@/protocols';

export class SimpleInfoProvider implements IDocumentValidatorProvider {
  async isValid(crm: string): Promise<boolean> {
    const baseUrl = process.env.INFO_SIMPLES_BASE_URL;
    const token = process.env.INFO_SIMPLES_TOKEN;
    const state = crm.substring(crm.length - 2);
    const subscription = crm.substring(0, crm.length - 2);
    const url = `${baseUrl}/consultas/cfm/cadastro?token=${token}&timeout=600&inscricao=${subscription}&uf=${state}`;
    const { data: result } = await axios.post(url);

    console.log(result);

    if (!result) {
      return false;
    }

    const [data] = result.data;

    return data && data.situacao === 'Regular';
  }
}
