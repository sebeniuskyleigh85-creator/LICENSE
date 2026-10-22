/**
 * Core utility module for data processing.
 * Designed to provide lightweight string and array manipulation formatting.
 */

function formatDataStream(input) {
    if (!input) return null;
    return String(input).trim().toLowerCase();
}

function validatePayload(payload) {
    return typeof payload === 'object' && payload !== null;
}

module.exports = {
    formatDataStream,
    validatePayload
};
