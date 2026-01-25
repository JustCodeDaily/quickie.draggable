import Month from "./Month";

const MONTHS = [
  { index: 0, name: "January" },
  { index: 1, name: "February" },
  { index: 2, name: "March" },
  { index: 3, name: "April" },
  { index: 4, name: "May" },
  { index: 5, name: "June" },
  { index: 6, name: "July" },
  { index: 7, name: "August" },
  { index: 8, name: "September" },
  { index: 9, name: "October" },
  { index: 10, name: "November" },
  { index: 11, name: "December" }
];

function createYearModel(year) {
  return MONTHS.map((month) => ({
    year,
    monthIndex: month.index,
    monthName: month.name
  }));
}

function Calendar({ year }) {
  const months = createYearModel(year);

  return (
    <main
      className="
        h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        scroll-smooth
      "
    >
      {months.map((month) => (
        <div
          key={month.monthIndex}
          className="snap-start"
        >
          <Month
            year={month.year}
            monthIndex={month.monthIndex}
            monthName={month.monthName}
          />
        </div>
      ))}
    </main>
  );
}

export default Calendar;
