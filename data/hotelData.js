const json  = require('body-parser');
const fs = require('fs');

//Buscar ID
const getHotelById = idHotel => {
    const data = fs.readFileSync('data/data.json');
    const hoteles = JSON.parse(data);
    console.log(data);
    return hoteles.find(item => item.id ==idHotel);
};

//buscar todos los hoteles
    const getAllHotel = fs.readFileSync('data/data.json');
    
//Borrar por ID
const deleteHotelById = idHotel => {
    const datajson = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    const dataFiltro = datajson.filter(item => item.id !== idHotel);
    fs.writeFileSync('data/data.json', JSON.stringify(dataFiltro));    

};

//Actualizar por ID
    const updateHotel = hotelDTO =>{
    const datajson = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    datajson.forEach(item => {
        if (item.id === hotelDTO.id){
            item.name = hotelDTO?.name ? hotelDTO.name : item.name;
            item.stars = hotelDTO?.stars ? hotelDTO.stars : item.stars;
            item.price = hotelDTO?.price ? hotelDTO.price : item.price;
            item.image = hotelDTO?.image ? hotelDTO.image : item.price;
            item.amenities = hotelDTO?.amenities ? hotelDTO.amenities : item.amenities;
        }
    });
    fs.writeFileSync('data/data.json', JSON.stringify(datajson));
};

//crear hotel
    const createHotel = hotelDTO=>{
    const datajson = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    datajson.forEach(item  => {
            item.id = hotelDTO?.id ? hotelDTO.id : item.id;
            item.name = hotelDTO?.name ? hotelDTO.name : item.name;
            item.stars = hotelDTO?.stars ? hotelDTO.stars : item.stars;
            item.price = hotelDTO?.price ? hotelDTO.price : item.price;
            item.image = hotelDTO?.image ? hotelDTO.image : item.price;
            item.amenities = hotelDTO?.amenities ? hotelDTO.amenities : item.amenities;
        });   
        fs.writeFileSync('data/data.json', JSON.stringify(datajson));
    };

module.exports = {
    getHotelById,
    getAllHotel,
    updateHotel,
    deleteHotelById,
    createHotel
    
};
