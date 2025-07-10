// Paso 1: Importa faker al inicio de tu archivo
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('New Car Coverage', async ({ page }) => {
    test.setTimeout(120000);

  // Paso 2: Genera los datos aleatorios al principio del test
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const maternalLastName = faker.person.lastName();


  // Crea un email único y realista usando el nombre y apellido generados
  const email = faker.internet.email({ firstName, lastName });

    // 🎂 1. Genera y formatea la fecha de nacimiento
  const birthdate = faker.date.birthdate({ min: 20, max: 40, mode: 'age' });
  const formattedBirthdate = birthdate.toLocaleDateString('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  await page.goto('https://120.tumomento.com/');
  await page.getByRole('link', { name: 'Comprar ahora' }).click();
  await page.getByText('Coche').click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  
  
  await page.getByRole('textbox', { name: 'Nombre' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Apellido paterno' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Apellido materno' }).fill(maternalLastName);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('textbox', { name: 'ejemplo@email.com' }).fill(email);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'Diario' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('dd/mm/aaaa').fill(formattedBirthdate);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'Femenino' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('textbox', { name: 'Ej.' }).fill('55700');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'NISSAN' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'VERSA' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: '2025' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'SENSE AUT' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'En mi casa/edificio' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await expect(page.locator('#plans-card-coverage-2')).toBeVisible({ timeout: 60000 });


  await expect(page.locator('#containerPeriodsPlans')).toMatchAriaSnapshot(`
    - group:
      - button "Platino"
      - button "Amplio" [pressed]
      - button "Limitado"
      - button "Mínimo"
    `);
  await expect(page.locator('#plans-card-coverage-2')).toMatchAriaSnapshot(`
    - group:
      - button /\\$\\d+ mil/
      - button "$1 mdp" [pressed]
      - button "$1.5 mdp"
      - button "$2 mdp"
    `);
  await expect(page.locator('#plans-card-coverage-2')).toMatchAriaSnapshot(`
    - paragraph: Suma asegurada
    - group:
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/ [pressed]
      - button "$1 mdp"
      - button "$1.5 mdp"
    `);
  await expect(page.locator('#plans-card-coverage-7')).toMatchAriaSnapshot(`
    - group:
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/ [pressed]
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/
    `);

  await expect(page.locator('#plans-container')).toMatchAriaSnapshot(`
    - text: Amparada
    - heading "Reparación siempre en agencia" [level=3]
    - paragraph: En caso de accidente, tu coche se llevará a reparar directamente a su agencia oficial, en vez de repararlo en uno de nuestros talleres de convenio.
    `);

  

  
  
  
});

test('Medium Coverage', async ({ page }) => {
    test.setTimeout(120000);

  // Paso 2: Genera los datos aleatorios al principio del test
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const maternalLastName = faker.person.lastName();
  // Crea un email único y realista usando el nombre y apellido generados
  const email = faker.internet.email({ firstName, lastName });

  await page.goto('https://120.tumomento.com/');
  await page.getByRole('link', { name: 'Comprar ahora' }).click();
  await page.getByText('Coche').click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  
  // Paso 3: Utiliza las variables para llenar los campos
  await page.getByRole('textbox', { name: 'Nombre' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Nombre' }).press('Tab');
  await page.getByRole('textbox', { name: 'Apellido paterno' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Apellido paterno' }).press('Tab');
  await page.getByRole('textbox', { name: 'Apellido materno' }).fill(maternalLastName);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('textbox', { name: 'ejemplo@email.com' }).fill(email);
  
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'Diario' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('dd/mm/aaaa').click();
  await page.getByPlaceholder('dd/mm/aaaa').fill('26');
  await page.getByPlaceholder('dd/mm/aaaa').press('ArrowRight');
  await page.getByPlaceholder('dd/mm/aaaa').fill('26/07');
  await page.getByPlaceholder('dd/mm/aaaa').press('ArrowRight');
  await page.getByPlaceholder('dd/mm/aaaa').fill('26/07/1989');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'Femenino' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('textbox', { name: 'Ej.' }).click();
  await page.getByRole('textbox', { name: 'Ej.' }).fill('55700');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'NISSAN' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'VERSA' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: '2020' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'SENSE AUT' }).check();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('radio', { name: 'En mi casa/edificio' }).check();
  
  await page.getByRole('button', { name: 'Continuar' }).click();
  await expect(page.locator('#plans-card-coverage-2')).toBeVisible({ timeout: 60000 });


  await expect(page.locator('#containerPeriodsPlans')).toMatchAriaSnapshot(`
    - group:
      - button "Platino"
      - button "Amplio" [pressed]
      - button "Limitado"
      - button "Mínimo"
    `);
  await expect(page.locator('#plans-card-coverage-2')).toMatchAriaSnapshot(`
    - group:
      - button /\\$\\d+ mil/
      - button "$1 mdp" [pressed]
      - button "$1.5 mdp"
      - button "$2 mdp"
    `);
  await expect(page.locator('#plans-card-coverage-2')).toMatchAriaSnapshot(`
    - paragraph: Suma asegurada
    - group:
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/ [pressed]
      - button "$1 mdp"
      - button "$1.5 mdp"
    `);
  await expect(page.locator('#plans-card-coverage-7')).toMatchAriaSnapshot(`
    - group:
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/ [pressed]
      - button /\\$\\d+ mil/
      - button /\\$\\d+ mil/
    `);

  //await page.pause();
  
  
});
