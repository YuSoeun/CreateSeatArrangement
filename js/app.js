document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const rows = e.target.result.split('\n');
    const room = document.getElementById('room');
    room.innerHTML = '';

    rows.forEach(row => {
      const [seatNumber, name, photo] = row.split(',');
      if (!seatNumber || !name || !photo) return;

      const seat = document.createElement('div');
      seat.className = 'seat';

      const seatNum = document.createElement('div');
      seatNum.textContent = `#${seatNumber}`;
      seat.appendChild(seatNum);

      const img = document.createElement('img');
      img.src = photo.trim();
      seat.appendChild(img);

      const personName = document.createElement('div');
      personName.textContent = name.trim();
      seat.appendChild(personName);

      room.appendChild(seat);
    });
  };

  reader.readAsText(file);
}
