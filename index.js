#!/usr/bin/env node
import inquirer from 'inquirer'
import { execSync } from 'child_process'
import chalk from 'chalk'

async function main() {
  const projectName = 'lscs-app' // fixed project name
  console.log(chalk.green(`🚀 Creating LSCS App CLI project: "${projectName}"`))

  // Step 1: Ask for project type
  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'Select project type:',
      choices: [
        {
          name: 'Server (coming soon)',
          value: 'server',
          disabled: 'Coming soon',
        },
        { name: 'Web (coming soon)', value: 'web', disabled: 'Coming soon' },
        { name: 'Next', value: 'next' },
      ],
    },
  ])

  if (projectType === 'next') {
    console.log(
      chalk.blue(`📦 Creating LSCS Next.js project "${projectName}"...`)
    )
    execSync(`npx create-lscs-next-app ${projectName}`, { stdio: 'inherit' })
  } else {
    console.error(chalk.red('❌ This option is currently unavailable.'))
    process.exit(1)
  }

  console.log(chalk.green(`✅ Project "${projectName}" created!`))
  console.log(
    chalk.yellow(
      `👉 Next steps:\n  cd ${projectName}\n  npm install\n  npm run dev`
    )
  )
}

main().catch((err) => {
  console.error(chalk.red('❌ Unexpected error:'), err)
  process.exit(1)
})
