export const getCertificates = async () => {
    const certPath = './server/ssl/localhost.pem';
    const keyPath = './server/ssl/localhost-key.pem';

    try {
        // Check if the files exist by attempting to stat them
        try {
            await Deno.stat(certPath);
            await Deno.stat(keyPath);
        } catch (err) {
            console.warn('SSL certificates not found, please follow instructions in the readme', err);
            return {};
        }

        // Read the files
        const cert = await Deno.readTextFile(certPath);
        const key = await Deno.readTextFile(keyPath);

        return { cert, key };
    } catch (err) {
        console.error('Error reading SSL certificates:', err);
        return {};
    }
};
