while (true) {
  const response = await llm.think(context)
  const tool = response.chooseTool()

  if (tool) {
    const result = await tool.execute()
    context.append(result)
  }

  if (response.isDone()) break
}