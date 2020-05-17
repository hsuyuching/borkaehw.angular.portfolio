import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  @Input() language: string;

  bioEnglish = bio['english']
  bioChinese = bio['chinese']

  constructor() { }

  ngOnInit() {
  }

}

let bio = {
  'english': [
    'I consider myself as a highly capable software engineer. Complementing my diverse skill set, I have developed an excellent understanding of a wide range of programming languages, along with signal processing and machine learning models, and have demonstrated this capability throughout my ongoing Electrical and Computer Engineering degree from University of Michigan, which is due to be completed in Spring 2018.',
    'While pursuing my education, I have been recognized for my outstanding ability to work as part of a team. It is for this reason I have participated in multiple team-oriented courses and projects and have consistently delivered finished assignments as per requirements and always within the allotted time provided. I am a project guy instead of an exam guy, which means I prefer extensive brainstorming teamwork environment instead of writing true-false questions and remembering correct answers.', 
    'I am sure after appraisal of my resume you will see I am an individual with excellent potential in your company. In addition to the skills listed, I also have an excellent work ethic, personality and tenacious attitude. Most important of all, I am an easygoing person capable of casting constructive suggestions, which makes me an effective team player. I look forward to hearing from you in due course.'
  ],
  'chinese': [
    '做過為期一年的專題開發，主題是2D Indoor Positioning System Through Android Game App。裝設Bluetooth發送器在室內空間的角落，至少三個發送器，再藉由Android系統的手機接收Bluetooth強度訊號，使用RSSI與三角定位法換算成發送器與手機的距離。然而空間中雜物會造成訊號傳輸干擾，這種方法在小距離移動時通常會產生誤差，因此我們結合手機本身的位移感應器INS，補償小範圍移動時的誤差。主要是用Kalman Filter結合RSSI與INS訊號，成功降低20%的誤差。演算法開發後，我們使用Android設計簡單遊戲來驗證結果，利用一個3D的西洋棋在棋盤上根據對應的計算位置移動，來代表使用者的現在位置。此專題獲得國科會專題計畫的贊助與表揚。',
    '第一學期主修Signal Processing與Machine Learning，Signal Processing部分尤其對影像處理比較感興趣。碩一時修過一門課叫做矩陣方法，整學期課程圍繞在Singular Value Decomposition，這是一個可以找出一個訊號中的主要組成成分的方法，我用此應用在手寫數字辨別、去除攝影機雜訊、全景無縫照片接合、二維影像三維建模之類等應用，這門課不乏也跟Machine Learning與Computer Vision有重複的概念，這門課收穫最大的就是對大量資料的矩陣運算有深入了解，奠定我日後Machine Learning與Computer Vision的基礎。碩士修的Machine Learning這門課主要建立在統計學理論上，Classification、Cluster、Regression基本模型修習，期中之後也學習更進階的理論如Kernel、Support Vector Machine、Decision Tree、Random Forest、Neural Network，期末報告我是做AdaBoost演算法的比較，AdaBoost是一種降低Classification類型問題錯誤率的方法，透過每一次的Training，會增加錯誤判斷的資料的比重，在下一次Training會增加正確判斷的機率，我的期末報告就是研究三種AdaBoost版本的優缺點。',
    '第二學期主修Operating System與Database Management。在Operating System放心力在了解OS最底層跟硬體之間是怎麼運作的。第一次的Project我們要寫一個User Level的Multithread Program，在第二次Project我們要寫一個Library讓使用者來撰寫Multithread Program，其中包含如何Swap Context、Create Thread、Suspend CPU、Wake Up CPU，實踐Mutual Exclusion、Condition Variable、Interrupt，讓我對於Multithread架構有很深的了解。第三次的Project我們要撰寫Virtual Memory的Library，實踐Virtual Memory與Physical Memory之間的互動。在Database Management課程裡主要學習怎麼設計Relational Model，避免Redundancy與Anomaly，應用方面著重在使用SQL，如何撰寫速度快與資料量少的Query，主要使用Oracle。期中後著重在Database本身的設計開發，包括B+ Tree與Hash Index等架構。',
    '我花時間在提升自我兩個面向，進階程式編寫能力與網頁開發。程式編寫部分我同時注重Python、Java、C++的演算法與資料結構的編寫能力，善用Object Oriented語言的優勢，撰寫簡潔與高效率的程式架構。網頁開發是個人發想與興趣所在的專題目標，熟悉基本Front-End語言如HTML、CSS、JavaScript，尤其多方利用JavaScript各種Library與Framework，除了基本的jQuery，還有如Twitter開發的Bootstrap、Google開發的AngularJS、Facebook開發的ReactJS，都是我初步涉及的領域。目前正在學習Back-End技術如PHP與學校所學的Database技術，規劃結合MySQL架設簡單的社群網站，同時也運用所學架設個人網頁。',
    '大二時擔任「清大附中山校友會」會長的職務，領導大家一年中舉辦十餘種不同的活動，讓附中山社團運作有聲有色，並在校園裡打響名號。在附中山，我上了寶貴的一課，如何與人相處、如何統籌活動；身為會長，學習到如何成為令人信服與負責的領導者，更難能可貴的是，我認識了許多一輩子可以信賴的夥伴。',
    '我是TEDxNTHU當中的成員，我們由一群創新、開放、喜愛分享的人組成，對新事物好奇，對新發明驚嘆，希望將世界最新的資訊帶到身旁的社群當中。每月例行活動是訂立主題由社員們互相分享，激盪出各種想法，而在每年五月會舉辦年度盛大活動TED年會，邀請諸位講者跟大家分享成功經驗、人生哲理、世界最新脈動。我在此獲得許多啟發與視野的拓展。',
    '大四參加世界模擬聯合國，英文叫World Model United Nations，這是由哈佛大學每年都會辦的全球性學生活動，主要就是由學生全程主持模擬聯合國開會的狀況，每一個會議都會有不同的議題需要討論，主題緊扣經濟、環境、政治、安全等世界正面臨的問題。會議期間每個人會代表一個國家委員參加會議，全程需以英文溝通，參與者來自世界各地不同國家，大家需要分析問題、辯論優點缺點、拉攏協商、模擬國際政經角力，最後努力贏得對自己國家最有利的會議結果。',
    '我是一個很努力的人，積極求學的態度讓我有機會遠赴美國念書，同時也抱持一貫的好成績。除了將學校課業學好之外，我也喜歡自學新事物，比如自己開發網頁，因為我所學即我所愛，這就是驅動我一直向前的力量。希望能有機會到貴公司實習，學習更多網路上與校園裡得不到的技能，我也願意將我的知識全新貢獻在我的職務上，如果能力有所不足，懇請多多指教。'
  ]
}
