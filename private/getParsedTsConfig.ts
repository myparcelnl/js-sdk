import ts from 'typescript';

export const getParsedTsConfig = (): ts.ParsedCommandLine => {
  const tsConfigFile = ts.findConfigFile('./', ts.sys.fileExists) ?? '';
  const tsConfig = ts.readConfigFile(tsConfigFile, ts.sys.readFile);

  return ts.parseJsonConfigFileContent(tsConfig.config, ts.sys, './');
};
