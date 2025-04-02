import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

/**
 * @function standardizeData
 * @description Ujednolica wartości wysyłane przez sieć do naszej uznanej formy
 *
 * @param {string} method - Metoda, którą chcemy opisać wysyłany string do klienta
 * @param {object} params - Parametry, które chcemy wysłać do klienta
 * @returns {string} Ujednolicona forma gotowa do wysyłki przez WebSocket
 *
 * @example
 * standardizeData('temperature', {roomId: 201923, temperatureValue: 102});
 */
function standardizeData(method: string, params: object): string
{
    return JSON.stringify(
        {
            method,
            params
        }
    )
}


app.get('/', (req: Request, res: Response) => {
    res.send(standardizeData('data', {value: 'nie wytrzymam i nie nawidzę olka k. to jest test data'}));
});

app.get('/api/data', (req: Request, res: Response) => {
    res.json({
        message: 'Nienawidzę Olka K. 😛🙏🔯🔯🔯🔯',
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Serwer działa 😛🙏🔯🔯🔯🔯: http://localhost:${port}`);
});