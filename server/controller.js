let videoList = [];
favorites = [];
// let id = [0];

module.exports = {
    getVideos: (req, res) => {
        res.status(200).send(videoList)
    },

    addVideos: (req, res) => {
        videoList.push(req.body.newVideoList)
        res.status(200).send(videoList)
    }, 

    // deleteVideos: (req, res) => {
        // index 
        // id
        // splice(index, 1)
        // res.status(200).send(viodeoList)
    // },

    // updateVideos(req, res) => {
        // index
        // id === id
        // videoList.push(favorites)
        // res.status(200).send(videoList)

    // }

    
}