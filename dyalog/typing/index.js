const av = `⌶⍺⍵¯⊢⊣⌷¨⍱⍨⌿⍀≤≥≠∨∧÷×∊⍴↑↓⍳○⌈⌊∇∘⊂⊃∩∪⊥⊤⍲⍒⍋⍉⌽⊖⍟⌹⍕⍎⍫⍪≡≢ö@∣⍷⋄←→⍝⎕⍞⍣`

for (let i = 0; i < 1000; i++) { document.getElementById("t").textContent += av[Math.floor(Math.random() * av.length)]}