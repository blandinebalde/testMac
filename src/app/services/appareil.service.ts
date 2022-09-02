export class AppareilService{
    appareils =[
        {
          name: "Machine á laver ",
          status : "éteint" 
        },
        {
          name: "Television ",
          status : "allumé" 
        },
        {
          name: "Ordinateur ",
          status : "éteint" 
        },
    
      ]
    
    swithOnAll(){
        for(let appareil of this.appareils){
                appareil.status="allumé"
        }
    }

    swithOnOne(index: number){
        this.appareils[index].status = "allumé"
        
    }

    swithOffOne(index: number){
        this.appareils[index].status = "éteint"
        
    }
    
    swithOfAll(){
        for(let appareil of this.appareils){
                appareil.status="éteint"
        }
    }  
}