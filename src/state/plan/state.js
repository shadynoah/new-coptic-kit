export interface PlanState {
selectedDay: number ,
planContent: Object,
selectedDayContent: Array,
checkedChaptersIndexes: Array,
checkedListOfDays : Array,
selectedChapterIndex: Number,
ArabicPlanContent: {}
}

export const PlanInitialState: PlanState = {
  selectedDay: 1 , 
  planContent : {},
  selectedDayContent:[],
  checkedChaptersIndexes:[],
  checkedListOfDays:[],
  selectedChapterIndex : 0,
  ArabicPlanContent :{}
};
