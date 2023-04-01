const fs = require("fs");

fs.promises
  .readdir(__dirname)
  .then((files) => {
    const promises = files.map(async (file) => {
      const stats = await fs.promises.stat(file);

      return {
        Name: file,
        Size: stats.size,
        Date: stats.mtime,
      };
    });
    return Promise.all(promises);

    // console.log(files); //? Display a list of files

    //* below is displaying files stats
    //   fs.promises
    //     .stat(files[1])
    //     .then((stats) => console.log(stats))
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //*
  })
  .then((result) => console.log("RESULT =>", result))
  .catch((error) => {
    console.error(error);
  });
