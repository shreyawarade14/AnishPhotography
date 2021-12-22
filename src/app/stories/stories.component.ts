import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
stories=[
  {
    title:"A Delhi Wedding Story | Alisha+Naman",
    description:"He is me and I am him, that's how Alisha and Naman describe their love. And we absolutely agree! Alisha",
    image:"assets/images/Delhi-Wedding-Photography-Story-NA-28-1024x576.jpg"
  },
  {
    title:"Udaipur Destination Wedding Story | Rhea+Akash",
    description:"Madly in love is how Rhea's mother described her daughter since she met Akash. And so she was! In love",
    image:"assets/images/Rhea-Aakash-Udaipur-Udaivilas-Destination-Wedding-22-1024x576.jpg"
  },
  {
    title:"An ITC Grand Bharat Wedding Story",
    description:"When you know, you know. It took all of 5 minutes for Shubham to realise that Ruchika was the person",
    image:"assets/images/ITC-Grand-Bharat-Destination-Wedding-28-scaled-1024x576.jpg"
  },
  {
    title:"Jodhpur Destination Wedding Story | Somna+Aditya",
    description:"A grand celebration of Somna and Aditya's love in a Jodhpur Destination Wedding Love is amazing. It is exciting. Beautiful.",
    image:"assets/images/SA_Jodhpur_Umaid_Bhawan_Wedding-8-scaled-1024x576.jpg"
  },
  {
    title:"A Bangkok Destination Wedding Story | Trisha+Rahul",
    description:"A Bangkok destination wedding that was a fairytale   Imagine a boy who liked a girl in school. The girl? Oblivious",
    image:"assets/images/3-e1594360300907-1190x669.jpg"
  },
  {
    title:"A Kenya Destination Wedding Story | Paayal+Samir",
    description:"A Kenya Destination wedding story full of laughter and love Gorgeous sunrises, the sound of the sea waves, perfect weather",
    image:"assets/images/PayalSamirWeddingHighlights-14-1024x576.jpg"
  },
  {
    title:"A Goa Destination Wedding | Nikita+Divyanu",
    description:"Best friends that became partners for life. That’s our crazy, amazing, energetic, powerhouse couple Nikita and Divyanu. They got married in a big and beautiful Goa destination wedding in ITC Grand surrounded by their family and friends.",
    image:"assets/images/Goa-destination-wedding-nikita-divyanu-14-e1594360455425-1024x576.jpg"
  },
  {
    title:"A Delhi Wedding Story | Varsha+Arjun",
    description:"Varsha’s brother described Arjun and Varsha’s story as a Karan Johar movie that was coodly-poodly to the power of 10. And he’s not wrong!The couple met on the set of the movie “The Hungry” in Mumbai. She first brushed him off as just another actor but soon realised that Arjun had a heart of gold which was meant for her! They had a two-day Delhi wedding at the Heritage Village Resort in Delhi last year.",
    image:"assets/images/Delhi-wedding-photography-story-ArjunVarsha-8-e1594360400371-1190x669.jpg"
  },
  {
    title:"A Delhi Wedding Story | Sarthak+Florianne",
    description:"Sarthak and Florianne’s love story is one of our favourite kinds – college sweethearts separated through time and space find their happily-ever-after!The happy couple met eight years ago while studying in the UK. After a year of being together, Florianne flew back to The Netherlands to finish her studies. So, in the next seven years of long-distance, their love only grew stronger over time. Their tale started in the UK and culminated in a multicultural grand Delhi wedding spread across The Leela Ambience and A Dot.",
    image:"assets/images/SF_Twogether_Studios_Delhi_Real_Wedding_Photography-20-1024x576.jpg"
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
