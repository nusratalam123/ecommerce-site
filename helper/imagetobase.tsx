// const imagetobase = async (image) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(image);
//   return new Promise((resolve, reject) => {
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = (error) => {
//       reject(error);
//     };
//   });
  
// }

// export default imagetobase

const imageTobase = async (image:File) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);

  const data = await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

  return data;
};

export default imageTobase;