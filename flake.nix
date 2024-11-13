{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    deno-overlay.url = "github:haruki7049/deno-overlay";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      deno-overlay,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ deno-overlay.overlays.deno-overlay ];
        };
        deno-version = "2.0.6";
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            deno.${deno-version}
          ];
        };
      }
    );
}
