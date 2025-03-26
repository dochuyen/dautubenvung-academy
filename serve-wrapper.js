import('serve').then(({ default: serve }) => {
  serve({ port: 80 });
}).catch(err => console.error(err));
