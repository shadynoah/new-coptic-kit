export interface AgbyaState {
   links: Array,
   contentOfSelectedPray: String,
   contentOfAllPray: String,
   titleOfPray: String,
   namesOfPray: []
  }
  
  export const AgbyaInitialState : AgbyaState  = {
    links:[],
    contentOfSelectedPray: "",
    contentOfAllPray:  "",
    titleOfPray: "",
    namesOfPray: []
  };
  
  