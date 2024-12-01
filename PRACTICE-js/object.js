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

var mobilephones = {
    samsung:{
        galaxy:{
            S24:{
             name: 'Galaxy S-24 Ultra',
             Price: 50000,
             PTA: true,
             SIM:'Dual',
             Color:['black' , 'blue' , 'gray' , 'white']
            },
        Zfold:{
            name: "Z-fold Pro",
            Make: 2024,
            Price: 40000,
            Pta: false,
            color:['blue' , 'sea grean']
        },
        },
        Aseries:{
           A12: {
            name: 'A24 Pro',
            Make: 2024,
            Color:['black' , 'White'],
           },
           A55:{
            name: 'A55 pro',
            Make: 2020,
            PTA: true,
            Price: 50000,
           }  
        }
    },
    Apple:{
        IPHONE:{
           IPHONE14:{
            name:'14 Pro Max',
            Price: 60000,
            PTA: false ,
            MAke: 2025,
        },
        IPHONE15:{
            name:'15 Pro Max',
            Price: 60000,
            PTA: false ,
            MAke: 2025,
        }

        },
        IPAD:{
         IPADS1:{
            name:'S1 Pro Max',
            Price: 60000,
            PTA: false ,
            MAke: 2025,
         },
         IPADS2:{
            name:'S2 Pro Max',
            Price: 60000,
            PTA: false ,
            MAke: 2025,
         }
        }
    }
}
// console.log(mobilephones)

var selectedcompany = 'samsung'

for (var companies in mobilephones){
    for(var variants in mobilephones[companies]){
        for(var model in mobilephones[companies][variants]){
          console.log(mobilephones[companies][variants][model])
        }
    }
}

console.log(mobilephones[selectedcompany])