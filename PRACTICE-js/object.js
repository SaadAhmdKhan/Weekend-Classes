// var student = {
//     name: 'ali',              // key ,   ---> properties , valuess
//     qualification: 'bachelors',
//     age: 24
// }

// student.name = 'anas'
// delete student.qualification            //to delete the key property off obj
// console.log(student)
// student.grade = 'A'
// console.log(student)                   //to add the key property off obj

// var mobilephones = {
//     samsung:{
//         galaxy:{
//             S24:{
//              name: 'Galaxy S-24 Ultra',
//              Price: 50000,
//              PTA: true,
//              SIM:'Dual',
//              Color:['black' , 'blue' , 'gray' , 'white']
//             },
//         Zfold:{
//             name: "Z-fold Pro",
//             Make: 2024,
//             Price: 40000,
//             Pta: false,
//             color:['blue' , 'sea grean']
//         },
//         },
//         Aseries:{
//            A12: {
//             name: 'A24 Pro',
//             Make: 2024,
//             Color:['black' , 'White'],
//            },
//            A55:{
//             name: 'A55 pro',
//             Make: 2020,
//             PTA: true,
//             Price: 50000,
//            }  
//         }
//     },
//     Apple:{
//         IPHONE:{
//            IPHONE14:{
//             name:'14 Pro Max',
//             Price: 60000,
//             PTA: false ,
//             MAke: 2025,
//         },
//         IPHONE15:{
//             name:'15 Pro Max',
//             Price: 60000,
//             PTA: false ,
//             MAke: 2025,
//         }

//         },
//         IPAD:{
//          IPADS1:{
//             name:'S1 Pro Max',
//             Price: 60000,
//             PTA: false ,
//             MAke: 2025,
//          },
//          IPADS2:{
//             name:'S2 Pro Max',
//             Price: 60000,
//             PTA: false ,
//             MAke: 2025,
//          }
//         }
//     }
// }
// console.log(mobilephones)

// var selectedcompany = 'samsung'

// for (var companies in mobilephones){
//     for(var variants in mobilephones[companies]){
//         for(var model in mobilephones[companies][variants]){
//           console.log(mobilephones[companies][variants][model])
//         }
//     }
// }

// console.log(mobilephones[selectedcompany])

// var watches = {
//     ROLEX: {
//       RolexExplorer: {
//         name: "Rolex Explorer",
//         price: "$1000",
//         fullName: "Rolex Explorer – M124270-0001",
//         category: "Men's Watch",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
//         Tags: "36mm, Black, CPO, explorer, M124270-0001, Oyster Perpetual, Rolex, sapphire",
//         color: ["golden", "silver"],
//         img: "https://iwc.com.pk/wp-content/uploads/2023/02/M124270-0001.jpg",
//       },
//       RolexGMTMasterII: {
//         name: "Rolex GMT Master II",
//         price: "$1500",
//         fullName: "Rolex GMT Master II - 116710BLNR",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         category: "Men's Watch",
//         color: ["black", "silver"],
//         Tags: "116710BLNR, 40mm, Black, CPO, GMT, Oyster Perpetual, Rolex",
//         img: "https://iwc.com.pk/wp-content/uploads/2022/12/M268622-0002-a.jpg",
//       },
//       RolexOysterLady: {
//         name: "Rolex Oyster Lady ",
//         price: "$900",
//         fullName: "ROLEX OYSTER PERPETUAL 26 LADY DATEJUST",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         category: "Women's Watch",
//         Tags: "26mm, Datejust, ladydatejust, Oyster Perpetual, Rolex",
//         color: ["Golden", "silver"],
//         img: "https://iwc.com.pk/wp-content/uploads/2021/11/rolex-79178.jpg",
//       },
//       RolexDateJust79: {
//         name: "Rolex Datejust 79 ",
//         price: "$1200",
//         fullName:
//           "Rolex Datejust 79174-62510B Watch - Silver Jubilee Diamond Dial",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         category: "Men's Watch",
//         Tags: "79174, 79174-62510B, Rolex, Rolex Datejust",
//         color: "silver",
//         img: "https://iwc.com.pk/wp-content/uploads/2022/05/79174.jpg",
//       },
//       RolexGMT: {
//         name: "Rolex® GMT",
//         price: "$1000",
//         fullName: "Rolex GMT-Master II 126711CHN",
//         category: "Men's Watch",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         color: "silver",
//         Tags: "126711CHNR, 40mm, Men, Oyster Perpetual, Rolex",
//         img: "https://imagedelivery.net/lyg2LuGO05OELPt1DKJTnw/7810e4f8-a105-4b29-7c63-3411e0ce6c00/public",
//       },
//       RolexOyster: {
//         name: "Rolex Oyster",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName:
//           "Rolex Oyster Perpetual Datejust 36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://imagedelivery.net/lyg2LuGO05OELPt1DKJTnw/f7555c4c-31b2-40fb-72ba-5ebc0a857a00/public",
//       },
//       RolexDateJust28: {
//         name: "Rolex Datejust 28 ",
//         price: "$1000",
//         category: "Men's Watch",
//         fullName: "Rolex Datejust 28 Diamond Bezel & Index - 69138-8570F",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         color: ["black", "golden", "silver"],
//         Tags: "28mm, 69138-8570F, Automatic, certified pre-owned, Datejust, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/02/rolex-79173-62523D-18.jpg",
//       },
//       RolexDateJust36: {
//         name: "Rolex DateJust 36",
//         fullName: "Rolex Datejust 36 – 116200-72600",
//         price: "$700",
//         category: "Men's Watch",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         Tags: "116200/72600, Automatic, certified, Datejust 36, Datejust 36 Men, pre-owned, Rolex, watch",
//         color: ["black", "golden", "silver"],
//         img: "https://iwc.com.pk/wp-content/uploads/2022/05/Rolex-12.jpg",
//       },
//     },
  
//     AUDI: {
//       TamaraRalph: {
//         name: "Tamara Ralph",
//         price: "$2000",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName:
//           "AUDEMARS PIGUET : Royal Oak Concept Flying Tourbillon “Tamara Ralph” Limited Edition",
//         category: "Women's Watch",
//         color: "golden",
//         Tags: "38.5mm Rose Gold-Manual Winding",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/u/audemars-piguet-royal-oak-15412ba-001-1.jpg",
//       },
//       AudemarsPiguet46: {
//         name: "Audemars Piguet 46",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName:
//           " Audemars Piguet Perpetual Datejust 36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/82bcb559010dcd84bc6a2f8c2fdad6e6/2/6/26238or-001_1.jpg",
//       },
//       AudemarsPiguet28: {
//         name: "Audemars Piguet 28",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet  Datejust 36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/1/5/15720st_green.jpg",
//       },
//       JumboThin: {
//         name: "Jumbo Thin",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet Datejust 36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/ap_royal_oak_26331or_blue-1_1_1.jpg",
//       },
//       AudemarsOyster: {
//         name: "Audemars  Oyster",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/1/5/15466bc-002_1.jpg",
//       },
//       AudemarsPiguet21: {
//         name: "Audemars Piguet 21",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet  36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/apro_15416ce_oo_1225ce_01__09_01__f_1.jpg",
//       },
  
//       AudemarsPiguet40: {
//         name: "Audemars Piguet 40 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet  36 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/3/8/38.jpg",
//       },
//       AudemarsPiguet22: {
//         name: "Audemars Piguet 22 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "Audemars Piguet 6 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://www.aviandco.com/media/catalog/product/cache/1201d8f17a9a86053a029ae3179a3cfc/a/p/ap_royal_oak_26331st_black_dial-1_1.jpg",
//       },
//     },
//     GShock: {
//       GShockCasio08: {
//         name: "G-Shock Casio 08",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName:
//           "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
//         category: "Women's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
//       },
//       GshockCasio09: {
//         name: "G-shock Casio 09 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
//       },
//       GshockCasio10: {
//         name: "G-shock Casio 10 ",
//         price: "$600",
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg",
//       },
//       GshockCasio11: {
//         name: "G-shock Casio 11 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg",
//       },
//       GshockCasio12: {
//         name: "G-shock Casio 12 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg",
//       },
//       GshockCasio13: {
//         name: "G-shock Casio 13 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg",
//       },
//       GshockCasio14: {
//         name: "G-shock Casio 14 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-2200SL-8ADR.jpg",
//       },
//       GshockCasio15: {
//         name: "G-shock Casio 10 ",
//         price: "$600",
//         caption:
//           "The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
//         fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
//         category: "Men's Watch",
//         color: [, "golden", "silver"],
//         Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
//         img: "https://iwc.com.pk/wp-content/uploads/2023/03/GA-700BP-1ADR.jpg",
//       },
//     },
//   };

// var brandSelect = document.getElementById('brandSelect')
// var productSelect = document.getElementById('productSelect')
// var selectedbrand;
// var selectedproduct;

// for(var brands in watches){
// brandSelect.innerHTML +=`
//          <option value = '${brands}'> ${brands} </option>
// `
// }


// function selectBrand(){
//     selectedbrand = event.target.value
//     productSelect.innerHTML = "";
//     for(var products in watches [selectedbrand]){
//         productSelect.innerHTML += `
//         <option value='${watches[selectedbrand][products].name}' > ${watches[selectedbrand][products].name} </option>
//         `
    
//     }

// }

// function selectProduct(){
//     selectedproduct = event.target.value
// }

// var productimage = document.getElementById('productimage')

// function searchProduct(){
//     for(var keys in watches [selectedbrand]){
//        if(watches[selectedbrand][keys].name === selectedproduct){
//         console.log(watches[selectedbrand][keys])
//         productimage.src = watches[selectedbrand][keys].img;
//        }
//     }
//     console.log(
//         `The Search Brand is ${selectedbrand} and the Product is ${selectedproduct}`
//       );
// }



// var userselected = 'AUDI';

// // console.log(watches[userselected])   // watches.ROLEX
// if(userselected === 'ROLEX'){
//     console.log(watches.ROLEX)
// } 
// else if(userselected === 'AUDI'){
//     console.log(watches.AUDI)
// }
// function addproduct(product){
//     console.log(product)
// }
// var productsRow = document.getElementById('products_row')
// for(var brands in watches){
//     for(var products in watches [brands]){
//         var watcheProduct = watches[brands][products]
//         productsRow.innerHTML+= `
//         <div>
//         <h4>${watcheProduct.name}</h4>
//         <img src = "${watcheProduct.img}" width = "50px" height = "50px">
//         <button onclick = "addproduct(${watcheProduct})">Add To Cart</button>
//         </div>
//         `
//     }
// }


// Methods 

// var student = {
//     firsname: 'john', 
//     lastname: 'doe',
//     GetFullName : function(){
//        return this.lastname
//     } ,
//     details : {
//         firstname : 'ali',
//         lastname:    'anas',
//         // getfullname: function(){
//         //     return this.firstname
//         //     // console.log(this.firstname + "" + student.details.firstname)
//         // }
//     }
// }

// console.log(student.GetFullName())

// var Studentinfo = {
//     batch8 : {
//         123:{
//             firstname: 'ali',
//             lastname: 'anas',
//         },
//         324:{
//             firstname: "john",
//             lastname: "doe"
//         },
//     }
// }

// function studentinfo(firstname , lastname , passed){
//     this.name = firstname,
//     this.secondname = lastname,
//     this.passed = passed
// }

// var student = new studentinfo('ali' , 'anas' , true)
// console.log(student)


// var studentInfo = [
//     {
//         name: 'name here' ,
//         score: 500 ,
//     },
//     {
//         name: 'name here 2' ,
//         score: 700 ,
//     },
//     {
//         name: 'name here 3' ,
//         score: 900 ,
//     },

// ]

// console.log(studentInfo[0])    // index counting calculate

/// Basic Quiz App Structure

// var htmlQuiz = [
//     {
//         question: 'HTML stands for ?',
//         option1: 'Hyper Text',
//         option2: "Mark Up" ,
//         option3:  "Hyper",
//         option4:  "Hyper Text Markup Language",
//         answer:   "Hyper Text Markup Language"
//     },
//     {
//         question: 'Which Element used to bold text in HTML?' ,
//         option1: 'img' ,
//         option2: 'h1' , 
//         option3: 'strong' , 
//         option4: 'p' , 
//         answer: 'strong'
//     },
//     {
//         question: 'Which Element used for Image in HTML?' ,
//         option1: 'span' ,
//         option2: 'div' , 
//         option3: 'image' , 
//         option4: 'img' , 
//         answer: 'img'
//     },
// ]

// var questioncontainer = document.getElementById("question_container")


// var score = 0
// var currentquestion = 0


// function renderQuestion(){
//     if(!htmlQuiz[currentquestion]){
//         console.log('Score Is' + score)
//         return
//     }
//     var questionoption = document.getElementsByName('option')
//     for(var i = 0; i<questionoption.length; i ++)
//         {
//             if(questionoption[i].checked){
//                 console.log(questionoption[i].value)
//                 console.log(htmlQuiz[currentquestion - 1].answer)
//                 if(questionoption[i].value === htmlQuiz[currentquestion].answer){
//                     score ++
//                 }
//             }
//         }


//         questioncontainer.innerHTML`
        
//         <div>
//         <h3>${htmlQuiz[currentquestion].question}</h3>

//         <div>
//             <label for="">
//                 <input type="radio" name="option" value='${htmlQuiz[currentquestion].option1}' >
//                 ${htmlQuiz[currentquestion].option1}
//             </label>
//         </div>
//          <div>
//             <label for="">
//                 <input type="radio" name="option" value='${htmlQuiz[currentquestion].option2}' >
//                 ${htmlQuiz[currentquestion].option2}
//             </label>
//         </div>
//          <div>
//             <label for="">
//                 <input type="radio" name="option" value='${htmlQuiz[currentquestion].option3}' >
//                 ${htmlQuiz[currentquestion].option3}
//             </label>
//         </div>
//          <div>
//             <label for="">
//                 <input type="radio" name="option" value='${htmlQuiz[currentquestion].option4}' >
//                 ${htmlQuiz[currentquestion].option4}
//             </label>
//         </div>


//     </div>
        
//         `

//         currentquestion++
// }

// renderQuestion()


// while do while loops

// for(var i = 0; i < 5; i ++){
//     console.log(i)
// }


// will not run , if condition not match in once
// var i = 0

// while (i < 3){
//     console.log(i)
//     i ++
// }

// var i = 0

// while (i<2){
//     console.log(i)
//     i ++
// }

// var j = 0

// while(j<4){
//     console.log(j)
//     j++
// }


// run atleast  once even if the condition false at first time

// var i = 0
// do {
//     console.log('Hello World')
//     i++
// } while(i<=0)

// var stdobj = {name: 'sualeh' , class: 'x'}

// function savename(){
//     localStorage.setItem('name','saad')
//     localStorage.setItem(name, {name: 'sualeh' , class: 'x'})

//     var stdinfo = JSON.stringify(stdobj)
//     localStorage.setItem('info' , stdinfo)
// }

// function displayname(){
//     var stdinfo = localStorage.getItem('info')
//     console.log(stdinfo)
//     console.log(typeof stdinfo)
//     var stdinfoobject = JSON.parse(stdinfo)
//     console.log(stdinfoobject)
//     console.log(typeof stdinfoobject)
// }


// function darkmode(){
//     localStorage.setItem('mode' , 'light')
//     checkmode()
// }

// function lightmode(){
//     localStorage.setItem('mode' , 'dark')
//     checkmode()
// }

// var body = document.getElementById('body')

// function checkmode(){
//     var currentmode = localStorage.getItem('mode')
//     console.log(body)
//     if(currentmode === 'dark'){
//         body.className = "darkbody"
//     }
//     else{
//         body.className = 'lightbody'
//     }
// }

// function setbydefault(){
//      var checkmodestate = localStorage.getItem('mode')
//      if(checkmodestate === null){
//         localStorage.setItem('mode' , 'light')
//         checkmode()
//      }else{
//         checkmode()
//      }
// }

// window.onload = setbydefault()
