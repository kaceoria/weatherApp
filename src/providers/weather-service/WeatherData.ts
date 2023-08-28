export class WeatherData {
    timezone: string
    daily_units: DailyUnits
    daily: Daily
  }

  class DailyUnits {
    temperature_2m_max: [string]
    sunrise: string
    weathercode: string
  }

  class Daily {
    temperature_2m_max: [string]
  }