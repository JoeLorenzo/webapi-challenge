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

// This route gets an action by id and project id
router.get("/project/:project_id/:id", (req, res) => {
    const { project_id, id } = req.params
    console.log(project_id, id)
    if (project_id) {
        projects.get(project_id)
        .then(project => {
            const action = project.actions.find(actions => actions.id == id)
            if (action) {
                  res.status(200).json(action)
               }
            else {
                    res.status(404).json({error:"action id not found"})
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

// This route removes an action by id and project id
router.get("/project/:project_id/:id", (req, res) => {
    const { project_id, id } = req.params
    console.log(project_id, id)
    if (project_id) {
        projects.get(project_id)
        .then(project => {
            const action = project.actions.find(actions => actions.id == id)
            if (action) {
                  res.status(200).json(action)
               }
            else {
                    res.status(404).json({error:"action id not found"})
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
// this route posts an action given a project id
router.post("/project/:project_id/post-action", (req, res) => {
    const { project_id } = req.params
    const newAction = {project_id, ...req.body}
    console.log(newAction)
    if (project_id) {
        projects.get(project_id)
        .then(project => {
            if (project) {
                actions.insert(newAction)
                .then(actions => {
                  res.status(200).json(actions)
                })
                .catch(err => {
                    console.log(err)
                  res.status(500).json({error:"server error, unable to post actions"})
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
    
router.put("/project/:project_id/:id", (req, res) => {
    const { project_id, id } = req.params
    const updatePost = {project_id, ...req.body}
    console.log (updatePost)
    if (project_id) {
        projects.get(project_id)
        .then(project => {
            if (project) {
                actions.update(id, updatePost)
                .then(actions => {
                  res.status(200).json(actions)
                })
                .catch(err => {
                    console.log(err)
                  res.status(500).json({error:"server error, unable to post actions"})
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



module.exports = router 