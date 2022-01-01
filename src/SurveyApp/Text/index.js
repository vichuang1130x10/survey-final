export const title = "台灣/香港在職母親的職業與家庭角色認同問卷調查";

export const positiveValues = [
  "達成人生目標",
  "發揮自我價值與才華",
  "面對工作挑戰",
  "突破自我極限",
  "提升專業能力",
  "發揮創意",
  "豐富心靈生活",
  "奉獻社會大眾",
  "真誠待人與合作",
  "維持生活安定",
  "擁有自由",
  "保有家庭/私人生活",
  "獲取名聲/地位",
  "在工作中升遷",
  "獲取財富",
  "擁有領導權",
];

export const negativeValues = [
  "無法達成人生目標",
  "無法發揮自我價值與才華",
  "無力面對工作挑戰",
  "無法突破自我極限",
  "安於現狀",
  "保守刻板",
  "感到空虛疲憊",
  "對社會缺乏貢獻",
  "對人猜疑、缺乏互信",
  "無法安定下來",
  "受制於人",
  "因工作而犧牲家庭/私人生活",
  "感到自己可有可無",
  "缺乏升遷機會",
  "報酬微薄",
  "只能聽命行事",
];

export const positiveCharactor = [
  "成為孩子的榜樣",
  "傾聽與接納孩子",
  "給予孩子尊重",
  "維持夫妻和諧",
  "維持家庭和諧",
  "規範孩子言行",
  "充分地愛孩子",
  "與家人共享休閒生活",
  "照料孩子健康",
  "參與孩子休閒活動",
  "教導孩子功課",
  "培養孩子興趣/技能",
  "願意為孩子成長而作出改變",
  "照料孩子生活起居",
  "維持家庭整潔",
  "規劃孩子的未來",
  "穩定家庭經濟",
];

export const negativeCharactor = [
  "失德，難以成為孩子的模範",
  "輕視孩子",
  "輕視孩子",
  "夫妻關係不和",
  "家庭關係緊張衝突",
  "放任孩子的言行表現",
  "鮮少表達對孩子的愛意",
  "鮮少與家人共享休閒生活",
  "忽視孩子健康",
  "少與孩子從事休閒活動",
  "忽略孩子功課",
  "忽略培養孩子生活興趣/技能",
  "不願意為孩子作出改變",
  "忽視孩子生活起居",
  "任由家居住環境髒亂",
  "沒有為孩子作生涯規劃",
  "家庭經濟不穏定",
];

export const positiveValuesData = positiveValues.map((c, i) => ({
  number: i,
  character: c,
  toggle: false,
  idealValue: 50,
  realValue: 50,
  negativeChar: negativeValues[i],
}));

export const positiveHomeValuesData = positiveCharactor.map((c, i) => ({
  number: i,
  character: c,
  toggle: false,
  idealValue: 50,
  realValue: 50,
  negativeChar: negativeCharactor[i],
}));

export const Part2AQuestions = [
  "我的人生滿足感主要來自工作",
  "我最重要的事情是與工作有關",
  "我的人生目標主要以工作為中心",
  "我的工作是我的重要組成部份",
];

export const Part2BQuestions = [
  "我的人生滿足感主要來自家庭",
  "我最重要的事情是與家庭有關",
  "我的人生目標主要以家庭為中心",
  "我的家庭是我的重要組成部份",
];

export const Part3Adjs = [
  "有敵意的(敵意的)",
  "羞愧的",
  "受啟發的(受鼓舞的)",
  "專注的",
  "心煩的(沮喪的)",
  "緊張的",
  "害怕的",
  "機警的(警覺的)",
  "有決心的(堅定的)",
  "積極的(活躍的)",
];

export const Part4Questions = [
  "工作使我無法如願參與家庭活動",
  "下班回家後，我常因精疲力竭,無力再為家人多做什麼",
  "我在工作上有效且必要的行為,在家庭生活中是適得其反",
  "我花在家庭的時間常會干擾到我的工作",
  "我常會感到家庭責任的壓力，所以工作時很難專心",
  "在家庭生活中有用的行為，並不能幫助我有效工作",
];


export const Numbers = [
  { id: "1", isSelected: false },
  { id: "2", isSelected: false },
  { id: "3", isSelected: false },
  { id: "4", isSelected: false },
  { id: "5", isSelected: false },
];
