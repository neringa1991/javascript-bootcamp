// import blogModels from "../modules/blogModels";

// const getAllBlogs = async (req, res) => {
//   try {
//     const allBlogs = await blogModels.find({});
//     res.status(200).json(allBlogs);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// };
// const sendBlogs = async (req, res) => {
//   try {
//     const postData = new blogModels(req.body);
//     const data = await postData.save();
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// };

// const getBlog = async (req, res) => {
//   const {id} = req.params;
//   try {
//     const data = await blogModels.find({_id: id});
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// };

// const deleteBlog = async (req, res) => {
//   const {id} = req.params;
//   try {
//     const data = await blogModels.findByIdAndDelete({_id: id});
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send(err);
//   }
// };

// const updateBlog=async(req,res)=>{
//     const {id} = req.params;
//     try {
//       const data = await blogModels.findByIdAndUpdate({_id: id}, {
//         req.body:
//       })
//       res.status(200).json(data);
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err);
//     }
// }
// export {allBlogs};
