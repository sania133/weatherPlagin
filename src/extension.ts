import * as vscode from 'vscode';
import { getWeather } from './weatherApi';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('weather.showWeather', async () => {
        const city = await vscode.window.showInputBox({
            prompt: 'Enter the city name for weather info',
        });

        if (city) {
            const weather = await getWeather(city);
            if (weather) {
                const weatherInfo = `Weather in ${weather.city}, ${weather.country}:
Temperature: ${weather.temperature}°C
Condition: ${weather.description}`;

                vscode.window.showInformationMessage(weatherInfo);
            } else {
                vscode.window.showErrorMessage('Failed to fetch weather data.');
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
