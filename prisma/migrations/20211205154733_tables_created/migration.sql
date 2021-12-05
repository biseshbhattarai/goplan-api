-- CreateTable
CREATE TABLE `Goal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalTitle` VARCHAR(191) NOT NULL,
    `goalDescription` VARCHAR(191) NOT NULL,
    `createDate` DATE NOT NULL,
    `startDate` DATE NOT NULL,
    `toCompleteDate` DATE NOT NULL,
    `toSetReminder` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reminder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reminderTitle` VARCHAR(191) NOT NULL,
    `createDate` DATE NOT NULL,
    `remindDate` DATE NOT NULL,
    `goalId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Achievement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `achievementStatus` VARCHAR(191) NULL,
    `goalId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `App` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `appName` VARCHAR(191) NOT NULL,
    `appLocation` VARCHAR(191) NOT NULL,
    `appType` ENUM('SOCIAL_MEDIA', 'ENTERTAINMENT', 'GAME', 'PRODUCTIVITY', 'UTILITY', 'OTHER') NULL,
    `toBlockDuration` VARCHAR(191) NOT NULL,
    `actualBlockDuration` VARCHAR(191) NOT NULL,
    `startBlockTime` DATETIME(3) NOT NULL,
    `endBlockTime` DATETIME(3) NOT NULL,
    `goalId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Share` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `goalId` INTEGER NOT NULL,
    `achievementId` INTEGER NOT NULL,
    `toUserId` INTEGER NOT NULL,
    `fromUserId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noteTitle` VARCHAR(191) NOT NULL,
    `noteType` ENUM('GOAL', 'IDEA', 'REMINDER', 'LEARNING', 'IMPORTANT', 'URGENT') NULL,
    `noteText` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `badgeName` VARCHAR(191) NOT NULL,
    `badgeType` ENUM('PRENOOB', 'BEGINEER', 'COMPETENT', 'DEDICATED', 'EXPERT', 'UNBEATABLE') NOT NULL,
    `badgeLogo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
