#!/usr/bin/env node
import inquirer from 'inquirer'
import { execSync } from 'child_process'
import chalk from 'chalk'

async function main() {
  // Step 1: Ask for project type
  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'Select project type:',
      choices: [
        {
          name: 'Api',
          value: 'api',
        },
        { name: 'Next', value: 'next' },
      ],
    },
  ])

  if (projectType === 'next') {
    console.log(chalk.blue(`📦 Creating LSCS Next.js project...`))
    execSync(`npx create-lscs-next-app`, { stdio: 'inherit' })
  } else if (projectType === 'api') {
    console.log(chalk.blue(`📦 Creating LSCS API project...`))
    execSync(`npx create-lscs-api`, { stdio: 'inherit' })
  } else {
    console.error(chalk.red('❌ This option is currently unavailable.'))
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(chalk.red('❌ Unexpected error:'), err)
  process.exit(1)
})
