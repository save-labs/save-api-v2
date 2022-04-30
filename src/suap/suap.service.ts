import { Injectable } from "@nestjs/common"
import { ClienteSuap, Credenciais } from "suap-sdk"

@Injectable()
export class SuapService {
  async request(
    credenciais: Credenciais,
    requestName: string,
    data: Array<any>
  ) {
    const cliente = new ClienteSuap({ credenciais })
    console.log(cliente.matrícula)
    return await cliente[requestName](...data)
  }
}
