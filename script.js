const titleText = "Rudy's Web";
const barPatterns = [
  "▂▁▂▃▄▅▆",
  "▆▅▄▃▂▁▂",
  "▃▄▅▆▂▁▂",
  "▁▂▃▄▅▆▅",
  "▂▃▄▅▆▅▄",
  "▂▂▁▁▂▂▃", 
  "▁▂▃▄▅▆▆",
  "▄▃▂▁▁▂▃",
  "▆▅▄▃▂▂▂",
  "▁▁▃▃▄▅▆",
];


let index = 0;

function updateTitle() {
  const bars = barPatterns[index % barPatterns.length];
  document.title = `${titleText} ${bars}`;
  index++;
}

setInterval(updateTitle, 500);

