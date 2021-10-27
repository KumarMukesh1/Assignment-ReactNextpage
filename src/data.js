
const data = [
    {
        Subject:"Python",
        Date:"Mon Nov 01,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    
    },
    {
        Subject:"Java",
        Date:"Tue Nov 02,2021",
        Time:"02:00 PM PST - 03:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:3,
        ButtonText:""
    },
    {
        Subject:"HTML",
        Date:"Wed Nov 03,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {

        Subject:"Python",
        Date:"Thu Nov 04,2021",
        Time:"10:00 AM PST - 12:00",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {

        Subject:"Java",
        Date:"Fri Nov 05,2021",
        Time:"9:00 AM PST - 11:00 AM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
    
        Subject:"HTML",
        Date:"Sat Nov 06,2021",
        Time:"02:00 PM PST - 03:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:3,
        ButtonText:""
    },
    {
    
        Subject:"Python",
        Date:"Mon Nov 08,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
    
        Subject:"Java",
        Date:"Tue Nov 09,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
        
        Subject:"HTML",
        Date:"Wed Nov 10,2021",
        Time:"11:00 AM PST - 12:00",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },

    {
        
        Subject:"Python",
        Date:"Thu Nov 11,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:3,
        ButtonText:""
    },
    {
        
        Subject:"Java",
        Date:"Fri Nov 12,2021",
        Time:"09:00 AM PST - 10:00 AM",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
    
        Subject:"HTML",
        Date:"Sat Nov 13,2021",
        Time:"11:00 AM PST - 12:00",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
        
        Subject:"Python",
        Date:"Mon Nov 14,2021",
        Time:"10:00 AM PST - 11:00 AM",
        Availability:"",
        TotalSeats:3,
        Booked:3,
        ButtonText:""
    },
    {
    
        Subject:"Java",
        Date:"Tue Nov 15,2021",
        Time:"11:00 PM PST - 12:00",
        Availability:"",
        TotalSeats:3,
        Booked:0,
        ButtonText:""
    },
    {
    
        Subject:"HTML",
        Date:"Wed Nov 16,2021",
        Time:"01:00 PM PST - 02:00 PM",
        Availability:"",
        TotalSeats:3,
        Booked:3,
        ButtonText:""
    },

]

for (let i=0;i<15;i++){
    data[i].Availability = data[i].TotalSeats-data[i].Booked;
    if (data[i].Availability === 0){
        data[i].ButtonText="Full"
    }else{
        data[i].ButtonText = "Book Now"
    }
}

export default data;