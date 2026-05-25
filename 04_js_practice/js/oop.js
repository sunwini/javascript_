class PrintMachine{
    constructor(fontSize, fontColour, fontfamily){
        this.fontSize = fontSize;
        this.fontColour = fontColour;
        this.fontfamily = fontfamily;
    }

    print(text){
        document.write(`<p style="font-size : ${this.fontSize} ; color : ${this.fontColour} ; font-family : ${this.fontfamily}">${text}</p>`);
    }
}

document.write("<h3>Task 1</h3>");

let printer1 = new PrintMachine("20px", "purple", "Arial");

printer1.print("Vil du høre en vits?");

let printer2 = new PrintMachine("20px", "blue", "Arial");

printer2.print("Katta med slips!");

document.write("<h3>Task 2</h3>");

class News{
    constructor(title, text, tags, date){
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publishDate = new Date(date);
    }

    get date(){
        let now = new Date();

        let days = now.getDate() - this.publishDate.getDate();

        let year = now.getFullYear() - this.publishDate.getFullYear();

        if(year > 0)
            return this.publishDate.toLocaleDateString();

        if (days == 0)
            return "today";

        else if (days < 7)
            return `${days} days ago`;

        else 
            return this.publishDate.toLocaleDateString();
    }

    print(){
        document.write(`
            <div style="width:600px; margin:20px; font-family:Arial;">
            
                <h2>${this.title}</h2>
                
                <p style="color:gray;">
                    ${this.date}
                </p>
                
                <p>
                    ${this.text}
                </p>
                
                <p>
                    #${this.tags.join(" #")}
                </p>

            </div>
        `);
    }
}

let news1 = new News(
    "Northern Lights in Norway",
    
    "Tourists from around the world visited Tromsø to see the beautiful northern lights this week.",
    
    ["norway", "travel", "nature"],
    
    "2026-05-24"
);

let news2 = new News(
    "Longest Norwegian Word",
    
    "One of the longest Norwegian words has more than 60 letters and is rarely used in everyday speech. 'Minoritetsladningsbærerdiffusjonskoeffisientmålingsapparatur' - a term used in scientific contexts.",
    
    ["norway", "language", "words"],
    
    "2025-05-24"
);

let news3 = new News(
    "New Electric Ferry",
    
    "Norway launched a new eco-friendly electric ferry to reduce pollution in coastal cities.",
    
    ["norway", "technology", "eco"],
    
    "2026-05-25"
);

news1.print();

news2.print();

news3.print();















