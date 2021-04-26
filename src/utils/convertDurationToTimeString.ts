export function convertDurationToTimeString(durantion: number) {
    const hours = Math.floor(durantion / 3600)
    const minutes = Math.floor((durantion % 3600) / 60);
    const seconds = durantion% 60;

    return [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')
}