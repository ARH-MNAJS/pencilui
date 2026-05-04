const args = process.argv.slice(2)

if (args.length === 0) {
  process.stdout.write("pencilui — implementation pending (Stage 3).\n")
  process.exit(0)
}

process.stdout.write(`pencilui — command "${args[0]}" not yet implemented (Stage 3).\n`)
process.exit(0)
