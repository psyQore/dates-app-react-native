export const formatDate = date => {
    const dateNew = new Date(date);
    const days_week = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const day = days_week[dateNew.getDay()];
    const dayNum = dateNew.getDate();
    const month = months[dateNew.getMonth()];
    const year = dateNew.getUTCFullYear();
    const hours = dateNew.getHours();
    const minutes = dateNew.getMinutes();
    const finalDate = `${day}, ${(dayNum)} de ${month} de ${year} a las ${hours}:${minutes}`;

    return finalDate;
  };
