const { SlashCommandBuilder } = require('discord.js');
const path = require('path');
const { getRoomLink } = require(path.resolve(__dirname, '../../script.js'));

const linkCommand = new SlashCommandBuilder()
    .setName('link')
    .setDescription('Envía el enlace del servidor de Haxball.');

module.exports = {
    data: linkCommand,
    async execute(interaction) {
        const roomLink = getRoomLink();

        if (!roomLink) {
            return interaction.reply({ content: 'El enlace del servidor de Haxball no está disponible. Asegúrate de que el servidor esté activo y que el enlace sea recibido.', ephemeral: true });
        }

        await interaction.reply({ content: `Aquí tienes el enlace del servidor de Haxball: ${roomLink}`, ephemeral: true });
    },
};