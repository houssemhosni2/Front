export interface User {
    id: number;
    nomUtilisateur: string;
    motDePasse: string;
    email: string;
    profile: string;
    role: string;
    competences: string[]; 
    nomEntreprise: string;
    adresseEntreprise: string;
    evaluations: Evaluation[];
    evenements: Evenement[];
    reclamations: Reclamation[];
    paiements: Paiement[];
  }
  
  export interface Evaluation {
   
  }
  
  export interface Evenement {
   
  }
  
  export interface Reclamation {
  
  }
  
  export interface Paiement {
   
  }
  