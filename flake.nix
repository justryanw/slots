{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        packages = {
          default = pkgs.buildNpmPackage {
            pname = "slots";
            version = "0.0.0";
            src = self;

            # nix run nixpkgs#prefetch-npm-deps package-lock.json
            npmDepsHash = "sha256-1JcTvz0sAhgYwXq6AsgH7qyTJ6LQP9dNfAJUYTxe60U=";
            npmPackFlags = [ "--ignore-scripts" ];

            NODE_OPTIONS = "--openssl-legacy-provider";

            installPhase = ''
              cp -R dist $out
            '';
          };

          serve = pkgs.writeShellApplication {
            name = "slots";
            text = ''
              cd ${packages.default}
              ${pkgs.python3}/bin/python -m http.server
            '';
          };
        };

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nix-output-monitor
            nodejs
          ];
        };
      }
    );
}
