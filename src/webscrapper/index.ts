import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

(async function scrap() {
   const driver = await new Builder().forBrowser(Browser.CHROME).build();
   try {
      const resultado = [];
      await driver.get(
         'https://www.espn.com.br/futebol/time/estatisticas/_/id/819/liga/BRA.1/temporada/2024',
      );
      await driver.wait(
         until.elementIsVisible(await driver.findElement(By.className('Table__Title'))),
      );
      const leftTable = await driver.findElement(
         By.xpath(
            '//*[@id="fittPageContainer"]/div[2]/div/div[5]/div/div/section/div/section/div/div[1]/section/div/div[2]/div/div[2]/table',
         ),
      );
      const data = await leftTable.findElements(By.className('Table__TR'));
      for (let res of data) {
         try {
            const colunas = await res.findElements(By.css('td, th'));
            if (colunas.length >= 4) {
               const name = await colunas[1].getText();
               const gamesPlayed = await colunas[2].getText();
               const goals = await colunas[3].getText();
               resultado.push({ name, gamesPlayed, goals });
            }
         } catch (ex) {
            console.log(ex);
         }
      }
      resultado.shift();
      console.log(resultado);
   } catch (ex) {
      console.log(ex);
   } finally {
      await driver.quit();
   }
})();
