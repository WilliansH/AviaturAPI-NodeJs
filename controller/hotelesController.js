const apiHotelController = {}
const hotelesData = require('../data/hotelData')
const hotelDataJson = require('../data/data.json');

//GET --- Busqueda por ID 
const getById = (req, res) =>{
    const id = req.params.hotelId;
    console.log('aqui', id);
    const hotel = hotelesData.getHotelById(id);
    if (hotel === null || hotel === undefined){
        res.status(200).jsonp({status: 'OK', mensaje: `el hotel con id: ${id} no se encontró`})
    }    
    res.status (200).jsonp(hotel);
}
//Get --- busqueda de todos los hoteles
    const getAll = (req, res) => {
        res.status (200).jsonp(hotelDataJson);
    }

//DELETE --- Eliminar por Id
const deleteById = (req, res) =>{
    const id = req.params.hotelId;
    const hotel = hotelesData.getHotelById(id);
    const respuesta = {};
    if (hotel !== null && hotel !== undefined){
        hotelesData.deleteHotelById(id);
        res.status(200).jsonp( {
            status: 'ok',
            mensaje: `el hotel con id: ${id} se ha eliminado`
        });
    } else {
        res.status(200).jsonp( {
            status: 'error',
            mensaje: `el hotel con id: ${id} no existe`
        });
    }
}

//PUT --- Actualiza por Id
function updateHotel(req, res) {
    const data = req.body;
    const hotel = hotelesData.getHotelById(data.id);
    if (hotel !== null && hotel !== undefined){
        hotelesData.updateHotel(data);
        res.status(200).jsonp( {
            status: 'ok',
            mensaje: `el hotel con id: ${data.id} se ha eliminado`
        });
    } else {
        res.status(200).jsonp( {
            status: 'error',
            mensaje: `el hotel con id: ${data.id} no existe`
        });
    }
};

//POST --- Crear nuevo registro, recibe por body, 
function createHotel(req, res) {
    const data = req.body;
    const hotel = hotelesData.getHotelById(data.id);
    
        hotelesData.createHotel(data);
        res.status(200).jsonp( {
            status: 'ok',
            mensaje: `el hotel con id: ${data.id} se a creado`
        });

        res.status(200).jsonp( {
            status: 'error',
            mensaje: `el hotel con id: ${data.id} no existe`
    });
     
}

module.exports = {
    getById,
    getAll,
    updateHotel,
    deleteById,
    createHotel
};