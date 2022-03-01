function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPerson(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("</div>");
    });
}

function photoDiv(p) {
  return ["<div>", `<p>제목: ${p.title}</p>`, emitPhotoData(p), "</div>"].join(
    "\n"
  );
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${p.title}</p>`);
  outStream.write(`<p>위치: ${p.location}<p/>`);
  outStream.write(`<p>날짜: ${p.date.toDateString()}</p>`);
}
