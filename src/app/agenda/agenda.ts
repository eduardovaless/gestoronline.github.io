export class Agenda {
    idAgenda: number;    
    idUnidade: number;
    nomeUnidade: string;    
    idPaciente: number; 
    idProfissional: string;    
    idProcedimento: number;
    nomeProcedimento: string;    
    grupoProcedimento: string; 
    dataAgenda: string;    
    horaAgenda: string;
    idConvenio: number;    
    carteiraConvenio: string; 
    validadeCarteiraConvenio: string;    
    situacaoAgenda: string;
    estadoAgenda: string;    
    usuario: string; 
    senhaAutorizacao: string; 
    paciente:{
        idPaciente: number;
        nomePaciente: string;
        prontuario: string;
        dataNascimento: string;
        nomeMae: string;
        sexo: string;
        nomeConvenio:string;
    }
}