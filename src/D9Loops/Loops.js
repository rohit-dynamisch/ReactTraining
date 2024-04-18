import React, { useEffect, useState } from "react";

function Loops() {
  let a=null;
  const [search,setSearch]=useState("")
  let newsArr = [
    {
      source: {
        id: 1,
        name: "Yahoo Entertainment",
      },
      author: "Cheyenne MacDonald",
      title:
        "One of these concept lunar vehicles could join NASA’s Artemis V astronauts on the moon",
      description:
        "Three companies are vying for the opportunity to send their own lunar vehicle to the moon to support NASA’s upcoming Artemis missions. The space agency announced\r\n this week that it’s chosen Intuitive Machines, Lunar Outpost and Venturi Astrolab to develop th…",
      reference: ["NASA", "BBC News"],
    },

    {
      source: {
        id: 2,
        name: "BBC News",
      },
      author: "Parker Hall",
      title: "The eclipse's 4-minute window into the Sun's secrets",
      description:
        "The blackout will give scientists a rare chance to do experiments they cannot do any other time.",
      reference: ["HQ", "NASA"],
    },

    {
      source: {
        id: 3,
        name: "Slashdot.org",
      },
      author: "EditorDavid",
      title:
        "Have Scientists Finally Made Sense of Stephen Hawking's Famous Black Hole Formula?",
      description:
        "Slashdot reader sciencehabit shares this report from Science magazine:\n\n\nFifty years ago, famed physicist Stephen Hawking wrote down an equation that predicts that a black hole has entropy, an attribute typically associated with the disordered jumbling of ato…",
      reference: ["TimesNow", "EQ", "NY Times"],
    },

    {
      source: {
        id: 4,
        name: "Business Insider",
      },
      author: "Morgan McFall-Johnsen",
      title: "This diagram shows what happens during a total solar eclipse",
      description:
        "This diagram easily breaks down the science of what's happening in space with the sun, moon, and Earth during the April 8 total solar eclipse.",
      reference: ["Digital Trends", "Cambridge.org", "Mecca1.net"],
    },

    {
      source: {
        id: 5,
        name: "BBC News",
      },
      author: "Marc Cummins",
      title: "One woman’s battle to push Africa’s space race",
      description:
        "Scientist Marie Makuate wants more African countries to have their own satellites orbiting Earth.",
      reference: ["NASA.com", "Insider.co"],
    },
  ];
  const [news, setNews] = useState(newsArr);

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  // FOR LOOP
  let forArr = [];
  for (let i = 0; i < news.length; i++) {
    let ref = [];

    for (let j = 0; j < news[i]?.reference?.length; j++) {
      ref[j] = <i>{news[i].reference[j]} , </i>;
    }

    forArr[i] = (
      <div key={news[i]?.source?.id} className="newsDiv">
        <h1>{news[i].title}</h1>
        <p>{news[i].description}</p>
        <br />
        <p>Source - {news[i].source.name}</p>
        <p>Reference - {ref} </p>
      </div>
    );
  }

  //FOR IN LOOP
  let forInArr = [];
  for (let i in news) {
    let ref = [];

    for (let j in news[i].reference) {
      ref[j] = <i>{news[i].reference[j]} , </i>;
    }

    forInArr[i] = (
      <div key={news[i]?.source?.id} className="newsDiv">
        <h1>{news[i].title}</h1>
        <p>{news[i].description}</p>
        <br />
        <p>Source - {news[i].source.name}</p>
        <p>Reference - {ref} </p>
      </div>
    );
  }

  //FOR OF LOOP
  let forOfArr = [];
  for (let item of news) {
    let ref = [];

    for (let references of item.reference) {
      ref.push(<i>{references} , </i>);
    }

    forOfArr.push(
      <div key={item?.source?.id} className="newsDiv">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <br />
        <p>Source - {item.source.name}</p>
        <p>Reference - {ref} </p>
      </div>
    );
  }

  //FOREACH LOOP
  let forEachArr = [];
  news.forEach((item) => {
        let ref = []; 
        item.reference.forEach(references=>
        {
          ref.push(<i>{references} , </i>)
        })

        forEachArr.push (
        <div key={item?.source?.id} className="newsDiv">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <br />
          <p>Source - {item.source.name}</p>
          <p>Reference - {ref} </p>
        </div>
    );
  });

  useEffect(()=>{
    setNews(newsArr.filter(item=>(item.title+item.description).toLowerCase().includes(search.toLowerCase())))
  },[search])

  return (
    <div>
      <h1>
        <center>NEWS using LOOPS</center>
        <center><span>Filter  :</span> <input placeholder="Search..." type="text" value={search} onChange={handleSearch}/></center>
      </h1>
      {/* {forArr} */}
      {/* {forArr} */}

      {/* {forInArr} */}

      {/* {forOfArr} */}

      {/* {forEachArr} */}
      {
        news.map ( item=>
        <div key={item?.source?.id} className="newsDiv">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <br />
          <p>Source - {item.source.name}</p>
          <p>Reference - 
          {item.reference.map(references=><i>{references} ,</i>)  }
         </p>
        </div> )
      }

      <hr/>
    </div>
  );
}

export default Loops;
