-- CreateTable
CREATE TABLE `dados_das_consultas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` INTEGER NOT NULL,
    `numeroDeTelefone` INTEGER NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `distrito` VARCHAR(191) NOT NULL,
    `nomeDaRua` VARCHAR(191) NOT NULL,
    `numeroDaRua` INTEGER NOT NULL,
    `cep` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
