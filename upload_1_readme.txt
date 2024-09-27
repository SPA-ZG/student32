URL aplikacije: https://sestilabos.onrender.com/



Pri pokretanju koda iz zip-a potrebno prvo pokrenuti npm install, a zatim npm run dev.

   
   
1. interpolation/one-way binding - DA, src/views/ExercisesView.vue, :4. Ako se u URL doda /exercises/{bilo sta} stranica interpolira vrijednost pohranjenu u varijabli exercise.

2. two-way binding - DA, src/views/ExercisesView.vue, :12, :15. Ova dva inputa, tj. varijable serialNumber i exerciseName dvosmjerno su povezane. Ako u prvi input upišemo redni broj vježbe u drugom se ispiše njeno ime. Vrijedi i obrnuto ako u drugi input upišemo ime vježbe u prvom se prikaže njen redni broj.

3. methods - DA, src/views/ExercisesView.vue, :49-81. Implementirane su metode za dohvat nasumične vježbe, nasumičnog broja, itd.

4. computed properties - DA, src/views/ExercisesView.vue, :88-94. Ovdje se dinamički formatira vrijeme s obzirom na varijablu time u kojoj je pohranjen broj sekundi provedem na trenutnoj stranici.

5. barem jedan scoped style - DA, src/views/ExercisesView.vue, :98-135. Stilovi za različite komponente stranice.

6. koristiti barem jedan lifecycle hook - DA, src/views/ExercisesView.vue, :40-48. Koristi se mounted u kojem se dohvaća nasumična vježba, postavljaju se placeholderi u inpute te se varijabla time povećava svake sekunde za 1.

7. routing (više stranica):
		aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - DA, src/App.vue :8, :10, src/router/index.js, :9-27.  Router linkovi koji vode na različite stranice. Mogu se posjetiti npr. stranice /exercises i /diet.
		dinamičko usmjeravanje s 404 stranicom ("catch all") - DA, src/router/index.js, :28-32. Ako se pokuša pristupiti nepostojećem URL-u, npr /blabla. Aplikacija preusmjerava korisnika na NotFound stranicu koja je definirana u src/views/NotFoundPage.vue.
         
8. (barem) dvije komponente:
		komponenta bez stanja, koristiti properties - NE.
		komponenta sa stanjem - NE.
      
9. barem jedna komponenta mora emitirati barem jedan event - NE.

10. store (Pinia) - NE.

11. asinkroni dohvat podataka s backenda - NE.