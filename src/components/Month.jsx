const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getFirstWeekdayOfMonth(year, monthIndex) {
  const date = new Date(year, monthIndex, 1);
  return date.getDay();
}

function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function createMonthGrid(year, monthIndex) {
  const firstWeekday = getFirstWeekdayOfMonth(year, monthIndex);
  const daysInMonth = getDaysInMonth(year, monthIndex);

  const cells = [];

  // Empty cells before day 1
  for (let i = 0; i < firstWeekday; i++) {
    cells.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  return cells;
}

function Month({ year, monthIndex, monthName }) {
  const grid = createMonthGrid(year, monthIndex);

  return (
    <section className="h-screen px-8 py-10 bg-stone-50 border-b">
      {/* Month Title */}
      <h1 className="text-3xl font-light mb-6">
        {monthName} {year}
      </h1>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 text-sm text-stone-500 mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-y-2 text-stone-800">
        {grid.map((cell, index) => (
          <div key={index} className="h-8">
            {cell !== null ? cell : ""}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Month;
