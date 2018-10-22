let videoList = [];
favorites = [];
let id = [0];

module.exports = {
    getVideos: (req, res) => {
        res.status(200).send(videoList)
    },

    addVideos: (req, res) => {
        favorites.push(req.body.id)
        res.status(200).send(favorites)

        
    }, 

    deleteVideos: (req, res) => {
        favorites.delete(req.params)
        splice(id, 1)
        res.status(200).send(favorites)
    },

    // updateVideos(req, res) => {
    //     favorites.delete(req.params.id)
    //     videoList.push(favorites)
    //     res.status(200).send(videoList)

    // }

    
}