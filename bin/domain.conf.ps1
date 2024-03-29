## -*- powershell script -*- #################################################
##                                                                          ##
##  WildFly domain Script Configuration                                     ##
##                                                                          ##
##############################################################################
#
# Specify the location of the Java home directory (it is recommended that
# this always be set). If set, then "%JAVA_HOME%\bin\java" will be used as
# the Java VM executable; otherwise, "%JAVA%" will be used (see below).
#
# $JAVA_HOME="C:\opt\jdk1.8.0"

#
# Specify the exact Java VM executable to use - only used if JAVA_HOME is
# not set. Default is "java".
#
# $JAVA="C:\opt\jdk1.8.0\bin\java"

#
# Specify options to pass to the Java VM. Note, there are some additional
# options that are always passed by run.bat.
#

if (-Not(test-path env:JBOSS_MODULES_SYSTEM_PKGS )) {
  $JBOSS_MODULES_SYSTEM_PKGS="org.jboss.byteman"
}

#$PRESERVE_JAVA_OPTS=$true

# Set default values if none have been set by the user
if (-Not $JAVA_OPTS) {

    $JAVA_OPTS = @()

    # JVM memory allocation pool parameters - modify as appropriate.
    $JAVA_OPTS += '-Xms64M'
    $JAVA_OPTS += '-Xmx512M'
    $JAVA_OPTS += '-XX:MaxMetaspaceSize=1024m'

    # Reduce the RMI GCs to once per hour for Sun JVMs.
    # $JAVA_OPTS += '-Dsun.rmi.dgc.client.gcInterval=3600000'
    # $JAVA_OPTS += '-Dsun.rmi.dgc.server.gcInterval=3600000'

    #prefer ipv4 stack
    $JAVA_OPTS += '-Djava.net.preferIPv4Stack=true'

    # Warn when resolving remote XML DTDs or schemas.
    # $JAVA_OPTS += '-Dorg.jboss.resolver.warning=true'

    # Make Byteman classes visible in all module loaders
    # This is necessary to inject Byteman rules into AS7 deployments
    $JAVA_OPTS += "-Djboss.modules.system.pkgs=$JBOSS_MODULES_SYSTEM_PKGS"

    # Use JBoss Modules lockless mode
    # $JAVA_OPTS += '-Djboss.modules.lockless=true'
}

# Uncomment this to run with a security manager enabled
# $SECMGR=$true



# The ProcessController process uses its own set of java options
if ($PROCESS_CONTROLLER_JAVA_OPTS -eq $null) {
    $PROCESS_CONTROLLER_JAVA_OPTS=$JAVA_OPTS
}

# The HostController process uses its own set of java options
if ($HOST_CONTROLLER_JAVA_OPTS -eq $null) {
    $HOST_CONTROLLER_JAVA_OPTS=$JAVA_OPTS
}

# Sample JPDA settings for remote socket debuging.
#PROCESS_CONTROLLER_JAVA_OPTS="$PROCESS_CONTROLLER_JAVA_OPTS -agentlib:jdwp=transport=dt_socket,address=8788,server=y,suspend=n"
#HOST_CONTROLLER_JAVA_OPTS="$HOST_CONTROLLER_JAVA_OPTS -agentlib:jdwp=transport=dt_socket,address=8787,server=y,suspend=n"

# Sample JPDA settings for shared memory debugging
#PROCESS_CONTROLLER_JAVA_OPTS="$PROCESS_CONTROLLER_JAVA_OPTS -agentlib:jdwp=transport=dt_shmem,server=y,suspend=n,address=jboss"
#HOST_CONTROLLER_JAVA_OPTS="$HOST_CONTROLLER_JAVA_OPTS -agentlib:jdwp=transport=dt_shmem,server=y,suspend=n,address=jboss"
