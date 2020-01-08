const express = require("express")
const router = express.Router()
const actions = require("../data/helpers/actionModel")
const projects = require("../data/helpers/projectModel")

router.use(express.json())

// This route gets all actions
 router.get("/project/:projectId/actions", (req, res) => {
    const { projectId } = req.params
    if (projectId) {
        projects.get(projectId)
        .then(project => {
            if (project) {
                projects.getProjectActions(projectId)
                .then(actions => {
                  res.status(200).json(actions)
                })
                .catch(err => {
                    console.log(err)
                  res.status(500).json({error:"server error, unable to retrieve actions"})
                })
                }
            else {
                    res.status(404).json({error:"project not found"})
                }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"server error, could not retrieve project"})
        })
        }
    else {
        res.status(400).json({error:"invalid id format"})
    }
})
    

// // This route post's a new project
// router.post("/projects", (req, res) => {
//     const { name, description } = req.body
//     if (name && description){
//         projects.insert(req.body)
//         .then(project => { 
//             res.status(201).json(project)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({err:"project could not be created"})
//         })
//     }
//    else {
//     res.status(400).json({error:"missing name or description"})
//    }
// })


// // This route get a specfic project by id
// router.get("/project/:projectId", (req, res) => {
//     const { projectId } = req.params
//     if (projectId) {
//         console.log("projectId:",projectId)
//         projects.get(projectId)
//         .then(project => {
//             if (project) {
//                 res.status(200).json(project)
//             }
//             else {
//                 res.status(404).json({error:"project not found"})
//             }
//         })
//         .catch(err =>{
//             console.log(err)
//             res.status(500).json({error:"server error, could not retrieve project"})
//         })
//     }
//     else {
//         res.status(400).json({error:"invalid id format"})
//     }
// })

// // this route updates a project 
// router.put("/project/:projectId", (req, res) => {
//     const { projectId } = req.params
//     console.log(projectId)
//     if (projectId) {
//         projects.get(projectId)
//         .then(project => {
//             if (project) {
//                 console.log(project.id)
//                 projects.update(project.id, req.body)
//                 .then(project => {
//                     res.status(201).json(project)
//                 })
//             }
//             else {
//                 res.status(404).json({error:"project not found"})
//             }
//         })
//         .catch(err =>{
//             console.log(err)
//             res.status(500).json({error:"server error, could not retrieve existing project"})
//         })
//     }
//     else {
//         res.status(400).json({error:"invalid id format"})
//     }
// })

// // this route deletes a project by id
// router.delete("/project/:projectId", (req, res) => {
//     const { projectId } = req.params
//     if (projectId) {
//         console.log("projectId:",projectId)
//         projects.get(projectId)
//         .then(project => {
//             if (project) {
//                 projects.remove(projectId)
//                 .then(res.status(204).json({message:"project deleted"}))
//                 .catch(err =>{
//                     console.log(err)
//                     res.status(500).json({error:"server error, unable to delete project"})
//                 })
//             }
//             else {
//                 res.status(404).json({error:"project not found"})
//             }
//         })
//         .catch(err =>{
//             console.log(err)
//             res.status(500).json({error:"server error, could not retrieve project"})
//         })
//     }
//     else {
//         res.status(400).json({error:"invalid id format"})
//     }
// })

module.exports = router 